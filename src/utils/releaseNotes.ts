import type { StarlightIcon } from '@astrojs/starlight/types';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type ReleaseNote = CollectionEntry<'releaseNotes'>;
export type ReleaseNoteData = ReleaseNote['data'];

export type ReleaseNotesGroup = {
  month: string;
  releaseNotes: ReleaseNote[];
};

const ICONS_MAP: Record<ReleaseNoteData['type'], StarlightIcon> = {
  enhancement: 'star',
  feature: 'rocket',
  deprecation: 'warning',
  breaking: 'error',
  docs: 'document',
};

export function getTypeIcon(type: ReleaseNoteData['type']): StarlightIcon {
  return ICONS_MAP[type] || 'seti:default';
}

export function getScopeLabel(scope: ReleaseNoteData['scope']): string {
  const labels: Record<string, string> = {
    'connector-api': 'Connector API',
    'pos-api': 'POS API',
    'be-api': 'Booking Engine API',
    'chm-api': 'Channel Manager API',
    general: 'General',
  };
  return labels[scope] || scope;
}

// Helper function to format release date
export function formatReleaseDate(release: string) {
  const date = new Date(release + '-01');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export function getReleaseNoteHref(note: ReleaseNote): string {
  const releaseMonth = getReleaseMonth(note.data.release);
  return `${import.meta.env.BASE_URL}/release-notes/${releaseMonth}/#${
    note.id
  }`;
}

function getReleaseMonth(release: string): string {
  return release.substring(0, 7); // Returns YYYY-MM
}

export async function getReleaseNotes() {
  const releaseNotes = await getCollection('releaseNotes');
  const groupedNotes = releaseNotes.reduce((acc, note) => {
    const releaseMonth = getReleaseMonth(note.data.release);
    let group = acc.get(releaseMonth);
    if (!group) {
      group = {
        month: releaseMonth,
        releaseNotes: [],
      };
      acc.set(releaseMonth, group);
    }
    group.releaseNotes.push(note);
    return acc;
  }, new Map<string, ReleaseNotesGroup>());
  const sortedReleases = Array.from(groupedNotes.values()).sort((a, b) => {
    return b.month.localeCompare(a.month);
  });

  return sortedReleases;
}

export async function getReleaseNotesByMonth(month: string) {
  const releaseNotes = await getCollection('releaseNotes');
  return releaseNotes.filter(
    (note) => getReleaseMonth(note.data.release) === month
  );
}

import am00 from '@mmstudio/am000001';

/**
 * 移除某个key
 */
export default function remove(mm: am00, key: string) {
	const global = mm.global;
	delete global[key];
}

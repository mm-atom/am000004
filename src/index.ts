/**
 * 移除某个key
 */
export default function remove(key: string) {
	delete global[key];
}

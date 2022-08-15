const characters       = "abcdefghijklmnopqrstuvwxyz0123456789"
const charactersLength = characters.length

export function hash (length = 5, acc = ""): string {
	if (length === 0) return acc

	return hash(length - 1, acc + characters.charAt(Math.floor(Math.random() * charactersLength)))
}

export function array_move<T>(arr: T[], old_index: number, new_index: number) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined as any);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr.filter(i => i);
}

export function display_time (seconds: number, thresold = 2) {
	if (seconds < 60 * thresold)
		return `${seconds} second${seconds !== 1 ? "s":""}`

	const minutes = Math.floor(seconds / 60)
	if (minutes < 60 * thresold)
		return `${minutes} minute${minutes !== 1 ? "s":""}`

	const hours = Math.floor(minutes / 60)
	return `${hours} hour${hours !== 1 ? "s":""}`
}
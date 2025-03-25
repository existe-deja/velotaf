import { buffer } from '@turf/buffer'
import { union } from '@turf/union'

export function bufferTrainStations(...args: Parameters<typeof buffer>) {
  const buffered = buffer(...args)
  if (!buffered) {
    return
  }

  const merged = union(buffered)
  if (!merged) {
    return
  }

  return merged
}

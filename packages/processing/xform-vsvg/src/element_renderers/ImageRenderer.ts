import { MarkType } from '@gog/mark-interfaces'
import { SGMark, SGImageItem } from '@gog/scenegraph-interfaces'
import { assertTypeIs } from './util'
import { VSvgMarkConverter } from './interfaces'

export class ImageRenderer implements VSvgMarkConverter {
	public static TARGET_MARK_TYPE = MarkType.Image

	public render(mark: SGMark<SGImageItem>) {
		assertTypeIs(mark, ImageRenderer.TARGET_MARK_TYPE)
		// TODO
		return { nodes: [] }
	}
}

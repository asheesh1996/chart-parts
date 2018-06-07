// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
import { parseScene } from '@gog/scenegraph'
import { SGMark } from '@gog/scenegraph-interfaces'
const data = require('../resources/heatmap.json')

export const scenegraph = parseScene(data)
export const title = 'Heatmap'
export const dimensions = {
	height: 800,
	width: 800,
	origin: [30, 19] as [number, number],
}

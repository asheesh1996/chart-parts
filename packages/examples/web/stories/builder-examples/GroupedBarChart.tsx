// tslint:disable
import * as React from 'react'
import { Renderer } from '@markable/react-svg-renderer'
import {
	SceneNode,
	Dimension,
	HorizontalAlignment,
	VerticalTextAlignment,
} from '@markable/interfaces'
import { scene, rect, group, text } from '@markable/builder'
import { band, linear, ordinal, CategoricalColorScheme } from '@markable/scales'
import { Orchestrator } from '@markable/orchestrator'

const renderer = new Renderer()
const pipeline = new Orchestrator(renderer)

const data = [
	{ category: 'A', position: 0, value: 0.1 },
	{ category: 'A', position: 1, value: 0.6 },
	{ category: 'A', position: 2, value: 0.9 },
	{ category: 'A', position: 3, value: 0.4 },
	{ category: 'B', position: 0, value: 0.7 },
	{ category: 'B', position: 1, value: 0.2 },
	{ category: 'B', position: 2, value: 1.1 },
	{ category: 'B', position: 3, value: 0.8 },
	{ category: 'C', position: 0, value: 0.6 },
	{ category: 'C', position: 1, value: 0.1 },
	{ category: 'C', position: 2, value: 0.2 },
	{ category: 'C', position: 3, value: 0.7 },
]

/**
 * Adapted from https://vega.github.io/vega/examples/grouped-bar-chart/q
 */
export class GroupedBarChart extends React.Component<{}> {
	private chart: SceneNode

	constructor(props: {}) {
		super(props)

		this.chart = scene(
			n =>
				n
					.scale(
						band('y', 'categoryHeight')
							.table('data')
							.range(Dimension.Height)
							.domain('category')
							.padding(0.2),
						linear('x')
							.table('data')
							.domain('value')
							.range(Dimension.Width)
							.nice()
							.zero(),
						ordinal('color')
							.table('data')
							.domain('position')
							.colorScheme(CategoricalColorScheme.category20),
					)
					.mark(
						group('chartgroup')
							.table('data')
							.facet({
								name: 'facet',
								table: 'data',
								groupBy: 'category',
							})
							.encode({
								y: ({ d }, { y }) => y(d.category),
								height: (d, { categoryHeight }) => categoryHeight(),
							})
							.child(node =>
								node
									.scale(
										band('pos', 'rowHeight')
											.table('facet')
											.domain('position')
											.range(Dimension.Height),
									)
									.mark(
										rect('bars')
											.table('facet')
											.encode({
												x: ({ d }, { x }) => x(d.value),
												y: ({ d }, { pos }) => pos(d.position),
												x2: (d, { x }) => x(0),
												fill: ({ d }, { color }) => color(d.position),
												height: (d, { rowHeight }) => rowHeight(),
											}),
										text()
											.table('facet')
											.encode({
												x: ({ d }, { x }) => x(d.value) - 3,
												y: ({ d }, { pos, rowHeight }) =>
													pos(d.position) + rowHeight() * 0.5,
												fill: () => 'white',
												align: () => HorizontalAlignment.Right,
												baseline: () => VerticalTextAlignment.Middle,
												text: ({ d }) => d.value,
											}),
									),
							),
					),
			{ width: 400, height: 200 },
		).build()
	}

	public render() {
		return pipeline.renderScene(
			this.chart,
			{ width: 400, height: 200 },
			{ data },
		)
	}
}

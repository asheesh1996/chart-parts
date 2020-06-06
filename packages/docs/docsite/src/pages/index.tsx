/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Splash from '../components/splash/splash'
import GlobalStyles from './styles'
import dbg from 'debug'
import packageJson from '../../package.json'

const log = dbg('site:index')
log('chart-parts documentation, version', packageJson.version)

export interface IndexPageState {
	scrollPercent: number
}

const IndexPage: React.FC = memo(() => {
	return (
		<Container>
			<GlobalStyles />
			<Helmet title="chart-parts">
				<html lang="en" />
				<link
					href="https://fonts.googleapis.com/css?family=Josefin+Sans|Roboto+Mono&display=swap"
					rel="stylesheet"
				></link>
			</Helmet>
			<Splash />
		</Container>
	)
})
IndexPage.displayName = 'IndexPage'
export default IndexPage

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`

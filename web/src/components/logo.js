import { chakra, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
    <chakra.svg  viewBox="0 0 202.2 29.5"  fill="brand.500" {...rest}>

<g>
	<g>
		<path class="st0" d="M52.7,5.1c1,1.2,1.6,2.8,1.6,4.8c0,1.9-0.5,3.5-1.5,4.7c-1,1.2-2.3,1.8-4,1.8h-3.1c-0.1,0-0.1,0-0.1,0.1v9.5
			c0,0.2-0.1,0.3-0.3,0.3h-2.5c-0.2,0-0.3-0.1-0.3-0.3V3.6c0-0.2,0.1-0.3,0.3-0.3h5.9C50.3,3.2,51.6,3.8,52.7,5.1z M50.3,12.7
			c0.5-0.7,0.8-1.6,0.8-2.8c0-1.2-0.3-2.2-0.8-2.9C49.7,6.3,49,6,48.1,6h-2.4c-0.1,0-0.1,0-0.1,0.1v7.5c0,0.1,0,0.1,0.1,0.1h2.4
			C49,13.7,49.7,13.4,50.3,12.7z"/>
		<path class="st0" d="M65.9,26l-3-9.8c0-0.1-0.1-0.1-0.1-0.1h-2.3c-0.1,0-0.1,0-0.1,0.1v9.7c0,0.2-0.1,0.3-0.3,0.3h-2.5
			c-0.2,0-0.3-0.1-0.3-0.3V3.6c0-0.2,0.1-0.3,0.3-0.3h5.9c1.1,0,2.1,0.3,3,0.8c0.9,0.5,1.5,1.3,2,2.3c0.5,1,0.7,2.1,0.7,3.4
			c0,1.4-0.3,2.6-0.9,3.6c-0.6,1-1.3,1.8-2.3,2.2c-0.1,0.1-0.1,0.1-0.1,0.2l3.3,10.1l0,0.1c0,0.2-0.1,0.2-0.3,0.2h-2.6
			C66.1,26.2,66,26.1,65.9,26z M60.4,6.1v7.3c0,0.1,0,0.1,0.1,0.1h2.4c0.9,0,1.6-0.3,2.2-1c0.5-0.7,0.8-1.6,0.8-2.7
			c0-1.2-0.3-2.1-0.8-2.8c-0.5-0.7-1.3-1-2.2-1h-2.4C60.4,6,60.4,6,60.4,6.1z"/>
		<path class="st0" d="M73.3,24.9c-1.1-1.1-1.6-2.5-1.6-4.4V9c0-1.8,0.5-3.3,1.6-4.4C74.4,3.6,75.8,3,77.6,3c1.8,0,3.3,0.6,4.4,1.7
			c1.1,1.1,1.7,2.6,1.7,4.4v11.4c0,1.8-0.6,3.3-1.7,4.4c-1.1,1.1-2.6,1.6-4.4,1.6C75.8,26.5,74.4,25.9,73.3,24.9z M79.7,22.9
			c0.5-0.6,0.8-1.3,0.8-2.3V8.9c0-0.9-0.3-1.7-0.8-2.3c-0.5-0.6-1.2-0.9-2.1-0.9c-0.9,0-1.5,0.3-2.1,0.9s-0.8,1.3-0.8,2.3v11.7
			c0,0.9,0.3,1.7,0.8,2.3c0.5,0.6,1.2,0.9,2.1,0.9C78.5,23.8,79.2,23.5,79.7,22.9z"/>
		<path class="st0" d="M87.4,24.9c-1.1-1.1-1.6-2.5-1.6-4.2v-2.6c0-0.2,0.1-0.3,0.3-0.3h2.5c0.2,0,0.3,0.1,0.3,0.3v2.7
			c0,0.9,0.2,1.6,0.7,2.1c0.5,0.6,1.1,0.8,1.9,0.8s1.4-0.3,1.9-0.8c0.5-0.6,0.7-1.3,0.7-2.1V3.6c0-0.2,0.1-0.3,0.3-0.3h2.5
			c0.2,0,0.3,0.1,0.3,0.3v17.1c0,1.7-0.5,3.1-1.6,4.2s-2.5,1.6-4.2,1.6C89.9,26.5,88.5,26,87.4,24.9z"/>
		<path class="st0" d="M111.8,6h-7.4c-0.1,0-0.1,0-0.1,0.1v7.1c0,0.1,0,0.1,0.1,0.1h4.5c0.2,0,0.3,0.1,0.3,0.3v2.1
			c0,0.2-0.1,0.3-0.3,0.3h-4.5c-0.1,0-0.1,0-0.1,0.1v7.2c0,0.1,0,0.1,0.1,0.1h7.4c0.2,0,0.3,0.1,0.3,0.3v2.1c0,0.2-0.1,0.3-0.3,0.3
			h-10.3c-0.2,0-0.3-0.1-0.3-0.3V3.6c0-0.2,0.1-0.3,0.3-0.3h10.3c0.2,0,0.3,0.1,0.3,0.3v2.1C112.1,5.9,112,6,111.8,6z"/>
		<path class="st0" d="M116.5,24.9c-1.1-1.1-1.6-2.5-1.6-4.3V8.9c0-1.8,0.5-3.2,1.6-4.3c1.1-1.1,2.5-1.6,4.3-1.6
			c1.8,0,3.2,0.5,4.3,1.6c1.1,1.1,1.6,2.5,1.6,4.3v0.5c0,0.2-0.1,0.3-0.3,0.3l-2.5,0.1c-0.2,0-0.3-0.1-0.3-0.3V8.7
			c0-0.9-0.3-1.6-0.8-2.2c-0.5-0.5-1.2-0.8-2-0.8s-1.5,0.3-2,0.8c-0.5,0.5-0.8,1.3-0.8,2.2v12.1c0,0.9,0.3,1.6,0.8,2.2
			c0.5,0.5,1.2,0.8,2,0.8s1.5-0.3,2-0.8c0.5-0.5,0.8-1.3,0.8-2.2v-0.9c0-0.2,0.1-0.3,0.3-0.3l2.5,0.1c0.2,0,0.3,0.1,0.3,0.3v0.5
			c0,1.8-0.5,3.2-1.6,4.3c-1.1,1.1-2.5,1.6-4.3,1.6C119,26.5,117.6,26,116.5,24.9z"/>
		<path class="st0" d="M141.5,3.6v2.1c0,0.2-0.1,0.3-0.3,0.3h-4.3c-0.1,0-0.1,0-0.1,0.1v19.8c0,0.2-0.1,0.3-0.3,0.3h-2.5
			c-0.2,0-0.3-0.1-0.3-0.3V6.1c0-0.1,0-0.1-0.1-0.1h-4.1c-0.2,0-0.3-0.1-0.3-0.3V3.6c0-0.2,0.1-0.3,0.3-0.3h11.8
			C141.4,3.3,141.5,3.4,141.5,3.6z"/>
		<path class="st0" d="M156.7,25.9l-0.7-3.8c0,0,0-0.1,0-0.1c0,0-0.1,0-0.1,0h-5.3c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1l-0.7,3.8
			c0,0.2-0.1,0.3-0.4,0.3h-2.5c-0.1,0-0.2,0-0.2-0.1s-0.1-0.2,0-0.3l4.9-22.3c0-0.2,0.2-0.3,0.4-0.3h2.9c0.2,0,0.3,0.1,0.4,0.3
			l4.9,22.3v0.1c0,0.2-0.1,0.3-0.3,0.3h-2.6C156.9,26.2,156.8,26.1,156.7,25.9z M151,19.5h4.4c0.1,0,0.1,0,0.1-0.1l-2.2-11.6
			c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1,0.1l-2.2,11.6C150.9,19.5,150.9,19.5,151,19.5z"/>
		<path class="st0" d="M171.1,26l-3-9.8c0-0.1-0.1-0.1-0.1-0.1h-2.3c-0.1,0-0.1,0-0.1,0.1v9.7c0,0.2-0.1,0.3-0.3,0.3h-2.5
			c-0.2,0-0.3-0.1-0.3-0.3V3.6c0-0.2,0.1-0.3,0.3-0.3h5.9c1.1,0,2.1,0.3,3,0.8c0.9,0.5,1.5,1.3,2,2.3c0.5,1,0.7,2.1,0.7,3.4
			c0,1.4-0.3,2.6-0.9,3.6c-0.6,1-1.3,1.8-2.3,2.2c-0.1,0.1-0.1,0.1-0.1,0.2l3.3,10.1l0,0.1c0,0.2-0.1,0.2-0.3,0.2h-2.6
			C171.3,26.2,171.2,26.1,171.1,26z M165.5,6.1v7.3c0,0.1,0,0.1,0.1,0.1h2.4c0.9,0,1.6-0.3,2.2-1c0.5-0.7,0.8-1.6,0.8-2.7
			c0-1.2-0.3-2.1-0.8-2.8c-0.5-0.7-1.3-1-2.2-1h-2.4C165.6,6,165.5,6,165.5,6.1z"/>
		<path class="st0" d="M187.9,6h-7.4c-0.1,0-0.1,0-0.1,0.1v7.1c0,0.1,0,0.1,0.1,0.1h4.5c0.2,0,0.3,0.1,0.3,0.3v2.1
			c0,0.2-0.1,0.3-0.3,0.3h-4.5c-0.1,0-0.1,0-0.1,0.1v7.2c0,0.1,0,0.1,0.1,0.1h7.4c0.2,0,0.3,0.1,0.3,0.3v2.1c0,0.2-0.1,0.3-0.3,0.3
			h-10.3c-0.2,0-0.3-0.1-0.3-0.3V3.6c0-0.2,0.1-0.3,0.3-0.3h10.3c0.2,0,0.3,0.1,0.3,0.3v2.1C188.2,5.9,188.1,6,187.9,6z"/>
		<path class="st0" d="M192.2,24.9c-1.1-1.1-1.6-2.5-1.6-4.2v-0.9c0-0.2,0.1-0.3,0.3-0.3h2.4c0.2,0,0.3,0.1,0.3,0.3v0.7
			c0,1,0.3,1.8,0.8,2.4c0.5,0.6,1.1,0.9,1.9,0.9s1.4-0.3,2-0.9c0.5-0.6,0.8-1.3,0.8-2.3c0-0.6-0.1-1.2-0.4-1.7
			c-0.3-0.5-0.6-0.9-1.1-1.3c-0.4-0.4-1.2-0.9-2.2-1.7c-1.1-0.8-2-1.5-2.6-2.1c-0.6-0.6-1.2-1.3-1.6-2.1c-0.4-0.8-0.7-1.8-0.7-2.9
			c0-1.8,0.5-3.2,1.6-4.2c1-1,2.4-1.6,4.1-1.6c1.7,0,3.2,0.6,4.2,1.7s1.6,2.6,1.6,4.4v0.8c0,0.2-0.1,0.3-0.3,0.3h-2.4
			c-0.2,0-0.3-0.1-0.3-0.3V9c0-1-0.3-1.8-0.8-2.4c-0.5-0.6-1.2-0.9-2-0.9c-0.8,0-1.4,0.3-1.9,0.8c-0.5,0.5-0.7,1.3-0.7,2.2
			c0,0.9,0.2,1.6,0.7,2.2c0.5,0.6,1.4,1.4,2.8,2.4c1.3,1,2.3,1.8,3,2.4c0.7,0.6,1.2,1.3,1.5,2c0.4,0.7,0.5,1.6,0.5,2.6
			c0,1.8-0.5,3.3-1.6,4.4c-1.1,1.1-2.5,1.7-4.2,1.7S193.3,26,192.2,24.9z"/>
	</g>
	<polygon class="st0" points="17,16.2 24.7,29.5 34.1,29.5 17,0 0,29.5 9.3,29.5 	"/>
</g>
    </chakra.svg>
  )
}
 

 
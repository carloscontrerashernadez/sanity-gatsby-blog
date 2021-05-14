

import { chakra, useToken, Icon } from '@chakra-ui/react'
import * as React from 'react'

 const MyIcon = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
    <Icon  viewBox="0 0 102.8 110.3" color='brand.500' {...rest}>

<g>
	<path fill="#FFC303" class="st0" d="M4.4,64c3.5,5.4,8.8,9.5,12.4,14.8c4.8,7.2,4.1,15.9,7.4,23.6c3.8,8.9,12.5,10.5,19.3,3.6
		c3.9-4,7.3-9.9,7.9-15.5c0.6-6.6-3.1-12.2-4.9-18.3c-2.2-7.5,0.3-12.5,5.2-16.2c6.1-2.9,13.5-3.9,19.7-5.3
		c8.3-1.8,16.8-4.3,23.3-10c9.4-8.3,11.1-21.2,3.4-29.9C93.3,4.4,84.9,0.3,77.6,0C63.3-0.5,56.5,10.6,46.1,18.2
		c-6.2,4.5-13.5,7.2-20.8,9.4c-6.2,1.9-13,3.2-18.4,7.1C-2.4,41.6-1.4,55.2,4.4,64z"/>
	<path   fill="currentColor" class="st1" d="M90.7,49.1c0-22-17.9-39.8-39.8-39.8S11,27.1,11,49.1s17.9,39.8,39.8,39.8c0.7,0,1.4,0,2.2-0.1l0.1,0.2
		l0.2-0.1c0,0,0.1,0,0.1-0.1l0,0c5.4-0.4,10.5-1.8,15.3-4.2c4.6-2.3,8.7-5.5,12.1-9.5l0,0c0.1,0,0.1,0,0.2,0l0.2,0l0-0.4
		C87.4,67.5,90.7,58.4,90.7,49.1z M23.1,62.9c-0.1,4.6,0.2,8.8,1,12.7c-1.8-1.8-3.4-3.8-4.8-6C20.3,67.5,21.6,65.2,23.1,62.9z
		 M23.4,58.4l0,0.2c-2.1,3.1-4,6.1-5.4,8.9c-2.9-5.2-4.6-11.1-4.8-17.1C16.1,53.1,19.5,55.8,23.4,58.4z M82.1,40.6
		c0-1.5-0.6-3-1.8-4c1.3-2,2.5-4,3.4-5.9c2.9,5.2,4.6,11.1,4.8,17.1c-1.9-1.9-4.2-3.8-6.7-5.6C82.1,41.7,82.1,41.1,82.1,40.6z
		 M38.8,25.9c-0.5,1.2-1.6,1.9-2.9,1.9c-0.3,0-0.6,0-0.9-0.1c-0.5-0.1-1-0.4-1.4-0.8c-0.5-0.5-0.8-1.2-0.9-1.9c0-0.1,0-0.3,0-0.4
		c0-0.4,0.1-0.8,0.2-1.2c0.5-1.2,1.6-2,2.9-2c0.3,0,0.7,0.1,1,0.2c0.5,0.2,1,0.5,1.3,0.9c0.5,0.5,0.8,1.2,0.8,1.9c0,0.1,0,0.2,0,0.2
		C39.1,25.1,39,25.5,38.8,25.9z M34.3,29.7c0.5,0.2,1.1,0.3,1.6,0.3c2.2,0,4.1-1.3,4.9-3.3c3.2,0.7,6.4,1.5,9.7,2.5
		c-3.4,2.9-6.9,6.1-10.2,9.4C35,43.8,30.1,49.5,26.1,54.9c0.6-4.3,1.7-8.7,3.1-12.9C30.5,37.7,32.3,33.6,34.3,29.7z M79.9,41.2
		c-0.1,0.5-0.3,1-0.7,1.4c-0.4,0.5-1,0.9-1.7,1c-0.5,0.1-1.1,0.1-1.6,0c-0.2-0.1-0.5-0.2-0.6-0.3c-0.5-0.2-0.8-0.6-1.1-1.1
		c-0.3-0.5-0.5-1.1-0.5-1.7c0-0.5,0.1-0.9,0.3-1.4c0.2-0.5,0.6-0.9,1-1.2c0.5-0.4,1.1-0.6,1.7-0.6l0.1,0c0,0,0.1,0,0.1,0
		c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.4,0.1,0.6,0.2c0.3,0.1,0.5,0.3,0.8,0.5c0.7,0.6,1,1.5,1,2.3C80,40.8,80,41,79.9,41.2z M71.5,40.6
		c0,1.2,0.4,2.3,1.1,3.2c-3.7,4.8-8,9.6-12.7,14.3c-2.6,2.6-5.2,5-7.9,7.4c-1-0.8-2.2-1.3-3.5-1.3c-1.8,0-3.4,0.9-4.4,2.4l0,0
		c-6.3-2.5-12.3-5.4-17.6-8.7c4.2-5.8,9.5-12,15.3-17.8c3.6-3.6,7.4-7,11.1-10.1c1.6,0.5,3.1,1.1,4.7,1.7c5,2,9.9,4.2,14.3,6.8
		C71.7,39.1,71.5,39.8,71.5,40.6z M45.4,69c0.1-0.5,0.3-1,0.6-1.4c0.6-0.8,1.5-1.3,2.5-1.3c0.7,0,1.5,0.3,2,0.8
		c0.4,0.3,0.7,0.8,0.9,1.3c0.1,0.4,0.2,0.8,0.2,1.2l0,0c0,0.5-0.1,1-0.4,1.5c-0.6,1-1.6,1.7-2.8,1.7c-0.6,0-1.2-0.2-1.7-0.5
		c-0.4-0.3-0.8-0.7-1.1-1.1c-0.3-0.5-0.4-1-0.4-1.5C45.4,69.3,45.4,69.2,45.4,69z M53.9,69.8c0-0.1,0-0.2,0-0.3
		c0-0.8-0.2-1.6-0.5-2.3c2.7-2.4,5.4-4.9,8.1-7.6c4.7-4.7,9-9.6,12.8-14.4c0.3,0.2,0.7,0.3,1.1,0.5c-0.6,3.5-1.5,7.1-2.7,10.5
		c-1.9,5.8-4.4,11.2-7.4,16.1C61.6,71.8,57.8,70.9,53.9,69.8z M76.5,35.3c-1.2,0.1-2.3,0.6-3.2,1.4c-4.6-2.6-9.6-5-14.8-7
		c-1.1-0.4-2.3-0.9-3.5-1.3c5.9-4.7,11.6-8.4,16.5-10.8c1.1,0.7,2.2,1.5,3.3,2.4C76.1,24.2,76.7,29.6,76.5,35.3z M78.7,35.3
		c0.1-4.6-0.2-8.8-1-12.7c1.8,1.8,3.4,3.8,4.8,6C81.4,30.6,80.2,32.9,78.7,35.3z M52.5,27.5c-3.8-1.2-7.6-2.3-11.3-3
		c0-1.3-0.6-2.6-1.5-3.6c2.9-3.9,6-7.1,9.2-9.5c0.6,0,1.3,0,1.9,0c6.4,0,12.8,1.7,18.4,4.8C64.2,18.8,58.4,22.7,52.5,27.5z M38,19.7
		c-0.6-0.3-1.3-0.4-2-0.4c-2.3,0-4.3,1.5-5,3.7c-1.8-0.1-3.5-0.2-5.2-0.2c-0.6,0-1.2,0-1.8,0c5.7-5.8,13.1-9.7,21.1-10.9
		C42.6,14,40.2,16.7,38,19.7z M32.4,28.6c-2.1,4-3.9,8.2-5.3,12.7c-1.6,4.9-2.8,9.9-3.4,14.7c-4.2-2.8-7.7-5.7-10.4-8.7
		c0.4-8.2,3.4-15.9,8.6-22.2c2.7-0.2,5.6-0.2,8.8,0.1C30.8,26.4,31.4,27.7,32.4,28.6z M25.5,59.7c5.4,3.4,11.4,6.3,17.8,8.8
		c-0.1,0.3-0.1,0.6-0.1,1c0,0.9,0.2,1.8,0.7,2.6c-4.9,3.7-9.4,6.6-13.6,8.6c-1.1-0.7-2.2-1.5-3.3-2.4C25.5,73.1,24.9,66.7,25.5,59.7
		z M45.3,73.7c0.9,0.7,2.1,1.1,3.2,1.1c2,0,3.8-1.1,4.7-2.9c3.7,1,7.3,1.9,10.7,2.4c-3.4,5.2-7.3,9.5-11.2,12.4c-0.6,0-1.3,0-1.9,0
		c-6.4,0-12.8-1.7-18.4-4.8C36.5,79.9,40.8,77.1,45.3,73.7z M66.4,74.7c3.4,0.5,6.7,0.7,9.7,0.7c0.6,0,1.2,0,1.8,0
		c-5.7,5.8-13.1,9.7-21.1,10.9C60.2,83.2,63.4,79.3,66.4,74.7z M74.7,56.9c1.2-3.7,2.1-7.4,2.8-11c1.3-0.2,2.5-0.8,3.3-1.8
		c3,2.2,5.6,4.5,7.7,6.8c-0.4,8.2-3.4,15.9-8.6,22.2c-3.7,0.3-7.8,0.2-12.3-0.4C70.5,67.8,72.8,62.5,74.7,56.9z"/>
</g>
    </Icon>
  )
}
 

export default MyIcon

 



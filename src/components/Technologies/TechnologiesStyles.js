import styled from 'styled-components'



export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

//background-color: red;
export const TechnologyComponents = styled.div`
display: grid;
padding: 3rem;
column-gap: 3rem;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
row-gap: 3rem;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-bottom: 0;
}
`
// export const ImageContainer = styled.div`
//   text-align: center;
//   background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
//   width: 100%;
//   padding: 60px;
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media ${props => props.theme.breakpoints.lg} {
//     background-image: none;
//     padding: 0;
//     margin-top: 40px;
//   }
//   @media ${props => props.theme.breakpoints.md} {
//     background-image: none;
//     padding: 0;
//     margin-top: 16px;
//   }
// `
//  background-color: green;
export const TechItem = styled.div`
  width:100%;
  display: grid; 
  grid-template-columns: 1fr 1.1fr 1.1fr 1.4fr 0.9fr; 
  grid-template-rows: 0.2fr 0.1fr; 
  grid-auto-rows: 1fr; 
  gap: 1.5rem 1.5rem; 
  grid-template-areas: 
  "Image Name Exp . Percentage"
  "Image Progress-Bar Progress-Bar Progress-Bar Progress-Bar"; 

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem 1rem; 
  }
}
`

// @media ${(props) => props.theme.breakpoints.sm} {
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem;
//   padding-bottom: 0;
// }
//background-color: yellow;
export const ImageContainer = styled.div`
  width:80px;
  height:auto;
  max-width:80px;
  grid-area: Image;

  @media ${props => props.theme.breakpoints.md} {
    max-width:75px;
    width:75px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    max-width:55px;
    width:55px;
  }
`
export const ProgressCont = styled.div`
  background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
  grid-area: Progress-Bar;
  align-items: center;
	justify-content: center;
	height: 20px;
	width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    height: 15px;
  }
`

export const ProgressBar = styled.div`
	background: linear-gradient(to left, #fb4c5b, #0f2245);
	box-shadow: 0 3px 3px -5px #fb4c5b, 0 2px 5px #0f2245;
	border-radius: 20px;
  grid-area: Progress-Bar;
	color: #fff;
	align-items: center;
	justify-content: center;
	height: 20px;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
  @media ${props => props.theme.breakpoints.sm} {
    height: 15px;
  }
`
//display: flex;

// export const TechInfo = styled.div`
//   width:100%;
//   height:auto;
//   background-color: blue;
//   grid-area: 1 / 2 / 2 / 6;
// `
export const TechName = styled.div`
  width:auto;
  height:100%;
  text-align: left;
  font-size: 3rem;
  grid-area: Name;
  @media ${props => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`

//background-color: white;
export const TechExp = styled.div`
  width:auto;
  height:100%;
  text-align: left;
  font-size: 1.5rem;
  grid-area: Exp;
  position: relative;
  span{
    bottom: 0;
    left: 0;
    position: absolute;
  }
  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`
//background-color: purple;
export const TechPer = styled.div`
  width:auto;
  height:100%;
  font-size: 3rem;
  grid-area: Percentage;
  text-align: right;
  color: ${(props) => props.percent >= 80 ? '#fb4c5b' : '#fff'};
  @media ${props => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`

export const Per = styled.span`
  font-size: 2.5rem;
  color: ${(props) => props.percent >= 80 ? '#fb4c5b' : '#fff'};
  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`
//background-color: pink;
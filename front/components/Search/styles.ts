import styled from "styled-components";
import Image from "next/image";
import logoImg from "../../assets/logo.png"

export const Container = styled.div`
height: 100vh;
background-color: #2A2A2A;
`

export const Logo = styled(Image).attrs({width: 166, height: 85, src: logoImg})`
`

export const InputDiv = styled.div`
display: flex;
margin-left: 76px;
`

export const Input = styled.input`
border-radius: 80px;
height: 62px;
`

export const Header = styled.div`
	background-color: #3A3A3A;
	height: 165px;
`
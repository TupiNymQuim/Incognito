import '../styles/global.css';
import MainContainer from '../components/mainContainer';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function MyApp({ Component, pageProps})
{
	return (
		<MainContainer>
			<Component {...pageProps} />
		</MainContainer>
	);
}

export default MyApp
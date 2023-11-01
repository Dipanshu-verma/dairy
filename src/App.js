import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dairyhome from "./components/pages/dairyhome/Dairyhome";



// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={(props) => (
// 		localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
// 	)} />
// )

function App() {


	return (

		<BrowserRouter>
			<Routes>
				{/* <Route exact path="/" element={<Dashboard />} /> */}
				{/* <Route path="/" name="Home Page" element={<Choose />} />
				
				<Route path="/new" element={<New />} />
				<Route path="/king-game" element={<KingGame />} />
				<Route path="/game-center" element={<GameCenter />} />
				<Route path="/slide1" element={<Slide1 />} />
				<Route path="/Slide3" element={<Slide3 />} />
				<Route path="/fslide1" element={<Fslide1 />} />
				<Route path="/fslide2" element={<Fslide2 />} />
				<Route path="/fslide3" element={<Fslide3 />} />
				<Route path="/step" element={<Step />} />
				<Route path="/build-to-trade" element={<PigFarm />} />
				<Route path="/solar-harvesting" element={<ChickenFarm />} />
				<Route path="/chicken-farming-data" element={<NewChickenFarm />} />
				<Route path="/choose" element={<Choose />} />
				<Route path="/marketplace" element={<Marketplace2 />} />
				<Route path="/buy/:key" element={<Elements />} />
				<Route path="/staking" element={<Staking />} />
				<Route path="/nft/marketplace" element={<NewMarketplace />} />
				<Route path="/product/:tradeid" element={<Product />} />
				<Route path="/create" element={<Create />} />
				<Route path="/single" element={<Single />} />
				<Route path="/multiple" element={<Multiple />} />
				<Route path="/swap" element={<Swap />} />
				<Route path="/choosemarketplace" element={<Choosemarketplace />} /> */}

{/* dairy start from here */}
<Route path="/" name="Home Page dairy" element={<Dairyhome />} />


			</Routes>
		</BrowserRouter>
	);
}
export default App;

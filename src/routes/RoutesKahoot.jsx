import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayaoutAdmin from "../pages/LayaoutAdmin/LayaoutAdmin";
import LayaoutClient from "../pages/LayaoutClient/LayaoutClient";
import CreateTest from "../pages/CreateTest/CreateTest";
import StartGame from "../pages/StartGame/StartGame";

const RoutesKahoot = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayaoutAdmin />} />
                    <Route path="/create" element={<CreateTest />} />
                    <Route path="/game/:codigo" element={<LayaoutClient />} />
                    <Route path="/game/:codigo/start" element={<StartGame />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesKahoot;
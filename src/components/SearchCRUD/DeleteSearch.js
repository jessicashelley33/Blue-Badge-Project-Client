import React, { useState, useEffect } from "react";
import OpenMap from "../SearchApi/TravelAPI";
import { Container, Row, Col } from "reactstrap";

useEffect(() => {
    async function deletePost() {
        await fetch(`https://api.opentripmap.com/0.1/en/places/radius?apikey=${apiKey}&radius=500&offset=${offset1}&lon=${lon}&lat=${lat}&format=json&limit=${limit}&rate=2`, { method: 'DELETE' });
        setStatus('Delete successful');
    }

    deletePost();
}, []);
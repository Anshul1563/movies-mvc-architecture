"use client";

import { on } from "events";
import Image from "next/image";
import { useState } from "react";

const initState = {
	username: "",
	email: "",
	password: "",
};

export default function Home() {
	const [deets, setDeets] = useState(initState);

	const [view, setView] = useState(0);

	function onLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		console.log(deets);
	}

	function onRegister(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		console.log(deets);
	}

	function clearDeets() {
		setDeets(initState);
	}

	function toggleView() {
		clearDeets();
		setView((view) => (view === 0 ? 1 : 0));
	}

	return <div></div>;
}

import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import { login } from "../../shopify.server";

import indexStyles from "./style.css";

export const links = () => [{ rel: "stylesheet", href: indexStyles }];

export async function loader({ request }) {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return json({ showForm: Boolean(login) });
}

export default function App() {
  const { showForm } = useLoaderData();
  
  return (
    <div className="index">
       <div className="overlay">
      <div className="content">
      <img src="https://retrospec.com/cdn/shop/files/Retrospec_Riff_Orange_RGB_1_c1b72e68-c0f7-4c2a-a0b2-38c945ced646_100x.png" alt="Logo" className="logo" />
        <h1>Customer account UI extensions For Restrospect</h1>
        <p>Customer account UI extensions for B2B platfrom develop by Restrospect Dev Team </p>
        
      </div>
      </div>
    </div>
  );
}

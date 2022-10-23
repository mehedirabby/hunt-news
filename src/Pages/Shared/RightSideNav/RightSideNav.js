import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousal from "../BrandCarousal/BrandCarousal";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> LogIn With Google{" "}
        </Button>
        <Button className="mb-2" variant="outline-dark">
          {" "}
          <FaGithub></FaGithub>Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whats App
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousal></BrandCarousal>
      </div>
    </div>
  );
};

export default RightSideNav;

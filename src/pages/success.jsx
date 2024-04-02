import React from "react";
import Layouts from "../components/Layouts/Layouts";
import "./success.css";

const Success = () => {
    const HomePage = () => {
        // Redirect to the home page
        window.location.href = "/"; // Replace "/" with the URL of your home page
    };
    return (
        <Layouts>
            <div className="centered-card">
                <div className="card">
                    <img style={{ height: "100px", width: "100px" }} className="card-img-top"src="https://s3-alpha-sig.figma.com/img/e9f3/57c3/699e17137eb9978c070d982d85c867ca?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKVbxEh5jK2DDcvvtVczblKvBf4rdYZQiYVJIWK32Cg8OlQXIUlb~kxfzLADyU19odbAkwJHM8dSkCQKUdrVhcAdzzSPS~sWCok82D9vnEptwnXyqYz0GkXzdT~YNBmVwjxBf2I~YRDxN6eOkUkSCjJ1rAvt4PVP1vMRczPisA7HFQI73f3iITGKOIMXM-guTmMSODK07Y6jHep~-a7eU8MIewFY21st9dTty5THJygJ57t2~~7s~NFaMz6pQSnohQA5Npn75Ta87Hk8g~gTIacpWkwud66u8xGxGc3~XktoThJDrLVtu4aLuokuAIlKrO18pDUIIXODkTu9R8ZK7A__" className="card-img-top" alt="Image" />
                    <div className="card-body">
                        <h5 className="card-title">Order is placed successfully!</h5>
                        <p className="card-text">You will be receiving a confirmation email with order details</p>
                    </div>
                    <button
                        className="button3"
                        onClick={HomePage}
                    >
                        Back TO Product
                    </button>
                </div>
            </div>
           
        </Layouts>

    );
}

export default Success;

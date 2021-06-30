import { useEffect, useState } from "react";
import "./CarScreen.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCarousel from "../components/CarCarousel";
import CarDetail from "../components/CarDetail";
import CarImagesSelector from "../components/CarImagesSelector";
import CarStats from "../components/CarStats";
import CarCallUsButton from "../components/CarCallUsButton";
import "bootstrap/dist/css/bootstrap.min.css";
import apiUrl from "../api/url"

function CarScreen() {
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

    const getPosts = async () => {
      const postsFromApi = await fetchPosts();
      try {
        if (!postsFromApi) throw Error("No Items");
        setPosts(postsFromApi);
        setSelectedImage(postsFromApi[0].imgs[0])       
      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    getPosts();
  }, []);

  // Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch(apiUrl.basesURL);
    const data = await res.json();

    return data;
  };

  return (
    <>
      {posts.length > 0 && (
        <>
          <div className="h-100 d-flex flex-column main">
            <Header />
            {/* <!-- hero --> */}
            <CarCarousel imgs={posts[0].imgs}/>
            <CarDetail selectedImage={selectedImage} info={posts[0]} />
            <div className="content">
              <CarCallUsButton/>
              {/* <!-- cards --> */}
              <div className="cards-wrapper d-none d-md-flex">
               <CarImagesSelector setSelectedImage={setSelectedImage} imgs={posts[0].imgs} />
              </div>
              <CarStats posts={posts[0]} />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default CarScreen;

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate accusamus repellendus animi est natus dolore laborum dolorum, veritatis repudiandae autem ipsum commodi sequi incidunt ab facilis deserunt neque mollitia. Ipsa saepe molestiae deleniti fugiat aliquid eaque maxime magni autem. Facere illo laborum asperiores minus! Ad quia similique optio mollitia consequuntur. Optio explicabo nobis illo iste, maxime minima! Distinctio libero voluptatem officiis quisquam, vitae atque voluptate deleniti voluptates praesentium consectetur provident officia aspernatur harum perferendis veniam vero ducimus repudiandae. Pariatur corrupti cupiditate soluta rerum suscipit? Natus a quaerat reprehenderit, dolorum molestiae ipsum qui sequi praesentium ullam fugiat minus cupiditate possimus quisquam?</h1> */}
        </div>
    );
};

export default Root;
import React from "react";
import HomeTop from "../Components/HomePage/HomeTop";
import ResourceCard from "../Components/HomePage/ResourceCard";
export function Homepage(){
    return(
        <>
        <HomeTop/>
        <div style={{padding:"60px"}}>
            <h2>Popular Resources Near You</h2>
            <div style={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <ResourceCard
          image="https://via.placeholder.com/300x200"
          title="Electric Drill"
          category="Tools"
          price="150"
          location="Delhi"
          rating="4.5"
        />

        <ResourceCard
          image="/assets/laptop.jpeg"
          title="Laptop"
          category="Electronics"
          price="800"
          location="Noida"
          rating="4.8"
        />

        <ResourceCard
          image="https://via.placeholder.com/300x200"
          title="Bicycle"
          category="Vehicles"
          price="200"
          location="Gurgaon"
          rating="4.3"
        />
        <ResourceCard
          image="https://via.placeholder.com/300x200"
          title="Bicycle"
          category="Vehicles"
          price="200"
          location="Gurgaon"
          rating="4.3"
        />
      </div>
    </div>


        </>
    )
}
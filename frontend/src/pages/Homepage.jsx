import React, { useState } from "react";
import HomeTop from "../Components/HomePage/HomeTop";
import { HowItWorksHome } from "../Components/HomePage/HowItWorksHome";
import resources from "../data/resource";
import ResourceCard from "../Components/HomePage/ResourceCard";
import '../Components/HomePage/HomeTop.css'
import ResourceDetailModal from "../Components/Resources/ResourceDetailModal";
import CategorySection from "../Components/HomePage/CategorySection";
export function Homepage(){
  const[selectedResource,setselectedResource]=useState(null);
  const [bookingResource, setBookingResource] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  function clearCategory() {
    setSelectedCategory(null);
  }
  
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }
  
  function handleBook(resource) {
    setBookingResource(resource);
    alert(`Booking started for ${resource.title}`);
  }
  
  function openDetail(resource){
    setselectedResource(resource);
  }
  function closeDetail(){
    setselectedResource(null);
  }
  const filteredResources = selectedCategory
  ? resources.filter(function (item) {
      return item.category === selectedCategory;
    })
  : resources;

    return(
        <>
        <HomeTop/>
        <div style={{padding:"60px"}}>
            <h2>Popular Resources Near You</h2>
            <div className="resource-grid">
            {filteredResources.map
            (function(item){
                return(
                  <ResourceCard
                  key={item.id}
                  {...item}
                  onClick={openDetail}
                  />
                );
              })}
      </div>
      <ResourceDetailModal
      open={Boolean(selectedResource)}
      resource={selectedResource}
      onClose={closeDetail}
      onBook={handleBook}
      />

    </div>
    <CategorySection onSelectCategory={handleCategorySelect} />
<HowItWorksHome/>
        </>
    );
}
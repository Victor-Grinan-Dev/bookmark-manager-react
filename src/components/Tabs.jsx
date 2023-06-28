import React, { useState } from "react";
import Tab from "./Tab";
import TabBtn from "./TabBtn";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('simple');

  const tabFx = (name) => {
    setActiveTab(name);
  }

  return (
    <section id="tabs">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>

        {/* TabBtns */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          
          <TabBtn isActive={activeTab === "simple" ? true : false} title="Simple Bookmarking" id={"simple"}  fx={() =>tabFx("simple")}/>
          <TabBtn isActive={activeTab === "speedy" ? true : false} title="Speedy Searching" id={"speedy"}  fx={() =>tabFx("speedy")}/>
          <TabBtn isActive={activeTab === "easy" ? true : false} title="Easy Sharing" id={"easy"}  fx={() =>tabFx("easy")}/>
        
        </div>

        {/* Contenido */}
        <div id="panels" className="container mx-auto">

        <Tab isHidden={activeTab === "simple" ? false : true} image="features1" title="Bookmark in one click" text="Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites." id="1" />

        <Tab isHidden={activeTab === "speedy" ? false : true} image="features2" title="Intelligent search" text="Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks." id="2" />

        <Tab isHidden={activeTab === "easy" ? false : true} image="features3" title="Share your bookmarks" text="Easily share your bookmarks and collections with others. Create
                a shareable a link that you can send at the click of a button." id="3" />

        </div>
      </div>
    </section>
  );
};

export default Tabs;

import React from "react";

const HomeCard = () => {
  const users = [
    {
      title: "Health Care",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1719657128_tiwnn_52x52.webp",
    },
    {
      title: "Best Deal",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1696172844_tiwnn_52x52.webp",
    },
    {
      title: "AC Repair Services",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1601959826_ac_52x52.webp",
    },
    {
      title: "Applince Repaier",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1583681524_tiwnn_52x52.webp",
    },
    {
      title: "Beauty",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1599673571_tiwnn_52x52.webp",
    },
    {
      title: "Men's Care",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1590661286_tiwnn_52x52.webp",
    },
    {
      title: "All Services",
      image:
        "https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/all-services.svg",
    },
  ];
  return (
    <div className="mb-20">
      <div className="flex w-[35rem] components overflow-x-auto mx-auto rounded-2xl">
        {users.map((user) => {
          const { title, image } = user;
          return (
            <div className="bg-white ">
              <article className=" px-8 py-3">
                <img className="" src={image} alt={title} />
                <h1 className="text-center">{title}</h1>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard;

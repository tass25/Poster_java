export const navigation = {
  categories: [
    {
      id: "films", //women
      name: "Films", //Films
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://fr.web.img2.acsta.net/pictures/24/02/20/10/24/4216307.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Coming Soon",
          href: "/",
          imageSrc:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNV8QoL0zZWGiJszBZCWWfC1OTU8G_KUaGxYgk6wkfxpuOY4Nu",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "genre", //clothing
          name: "Genre", //Clothing
          items: [
            { name: "Horror", id: "Horror", href: "#" },
            { name: "Adventure", id: "Adventure", href: "#" },
            { name: "Animation", id: "Animation", href: "#" },
            { name: "Comedy", id: "Comedy", href: "#" },
            { name: "Crime", id: "Crime", href: "#" },
            { name: "Documentary", id: "Documentary", href: "#" },
            { name: "Drama", id: "Drama", href: "#" },
            { name: "Romance", id: "Romance", href: "#" },
          ],
        },
        {
          id: "ratings", //accessories
          name: "Ratings",
          items: [
            { name: "8+", id: "8+" },
            { name: "6+", id: "6+" },
            { name: "5+", id: "5+" },
            { name: "2+", id: "2+" },
          ],
        },
      ],
    },
    {
      id: "TV SHOW",
      name: "TV SHOW",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://fr.web.img2.acsta.net/pictures/24/02/20/10/24/4216307.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Coming Soon",
          href: "/",
          imageSrc:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNV8QoL0zZWGiJszBZCWWfC1OTU8G_KUaGxYgk6wkfxpuOY4Nu",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "genre",
          name: "Genre",
          items: [
            { name: "Horror", id: "Horror", href: `{films/genre/Horror}` },

            { name: "Adventure", id: "Adventure", href: "#" },
            { name: "Animation", id: "Animation", href: "#" },
            { name: "Comedy", id: "Comedy", href: "#" },
            { name: "Crime", id: "Crime", href: "#" },
            { name: "Documentary", id: "Documentary", href: "#" },
            { name: "Drama", id: "Drama", href: "#" },
            { name: "Romance", id: "Romance", href: "#" },
          ],
        },
        {
          id: "ratings", //accessories
          name: "Ratings",
          items: [
            { name: "8+", id: "8+" },
            { name: "6+", id: "6+" },
            { name: "5+", id: "5+" },
            { name: "2+", id: "2+" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", id: "/" },
    { name: "Stores", id: "/" },
  ],
};

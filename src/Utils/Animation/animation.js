export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};



export const SlideLeft = (delay) => {
    return{
      hidden:{
          opacity:0,
          x:100,
      },
      visible:{
          opacity:1,
          x:0,
          transition:{
              delay:delay,
              duration:1,
          },
      },
    };
  };
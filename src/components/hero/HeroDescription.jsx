const HeroDescription = ({
    title,
  description,
  className = 'text-center',
}) => {
  return (
    <div  style={{marginTop:'2em', paddingLeft:'7em', paddingRight:'7em',paddingBottom:'4em', paddingTop:'4em'}}>
      <p
        className={`${className} font-semibold text-[17px] leading-6 sm:text-xl mt-[10px] mb-8`}
      >
         <b style={{color:'navy'}}>{title}:</b>  {description}
      </p>
    </div>
  );
};

export default HeroDescription;

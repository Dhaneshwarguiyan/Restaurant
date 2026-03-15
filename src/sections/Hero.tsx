import Button from "../lib/components/ui/Button/Button";

const Hero = () => {
  return (
    <main className="relative w-full h-screen">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop"
        alt="bg img"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        
        <p className="text-lg italic mb-4">We Offer you</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Fresh Ingredients, Tasty Meals
          <br />
          & True Flavours
        </h1>

        <p className="mt-2 text-gray-200 max-w-xl">
          We have awesome recipes and the most talented chefs in town
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Button content={"Discover Our Menu"} size={"desktop"}/>
          <Button content={"Book a Table"} variant={"secondary"}/>
        </div>

      </div>
    </main>
  );
};

export default Hero;
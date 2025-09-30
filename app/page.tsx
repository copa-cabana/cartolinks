import Hero from "@/components/Hero";
import ThemeToggle from "@/components/ThemeToggle";
import { ChevronDown, Image, CreditCard } from "lucide-react";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white pt-6 padding_section">
      {/* Hero Section */}
      <div className="flex justify-center hero_top_margin gap-8 w-full max-w-6xl mx-auto">
        <div className="w-1/2">
          <Hero
            id="one"
            type="dots"
            images={[
              "/images/cartolinks_image_one.png",
              "/images/cartolinks_image_one.png",
              "/images/cartolinks_image_one.png",
            ]}
          />
        </div>
        <div className="w-1/2">
          <Hero
            id="two"
            type="arrows"
            images={[
              "/images/cartolinks_image_two.png",
              "/images/cartolinks_image_two.png",
              "/images/cartolinks_image_two.png",
            ]}
          />
        </div>
      </div>

     {/* Features Section */}
<section className="w-full max-w-6xl mx-auto mt-12 px-6 margin_section">
  {/* Header Row */}
  <div className="flex items-center justify-between mb-6 margin_section">
    <h2 className="text-2xl font-bold">Generate</h2>
    <button className="flex items-center border-none gap-1 text-sm text-gray-500 hover:text-black show-more">
      <ChevronDown className="w-4 h-4" /> Show all 
    </button>
  </div>

  {/* Features Grid */}
  <div className="flex justify-center flex-wrap ">
    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/image.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Image</span>
          <button className="text-xs px-2 py-1 border-none new_button space_atop rounded-md text-gray-600 hover:text-black ">
            New
          </button>
        </div>
        <p className="text-sm text-gray-600 space_right m-0">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-white ">
          Open
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/video.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Video</span>
          
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/realtime.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Realtime</span>
         
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/enhancer.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Enhancer</span>
          <button className="text-xs px-2 py-1 border-none new_button space_atop rounded-md text-gray-600 hover:text-black">
            New
          </button>
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>
  </div>

</section>

<section className="w-full max-w-6xl mx-auto mt-12 px-6 margin_section">
  {/* Header Row */}

  {/* Features Grid */}
  <div className="flex justify-center flex-wrap ">
    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/edit.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Edit</span>
          <button className="text-xs px-2 py-1 border-none new_button space_atop rounded-md text-gray-600 hover:text-black">
            New
          </button>
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/lipsync.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Video Lipsync</span>
          <button className="text-xs px-2 py-1 border-none new_button space_atop rounded-md text-gray-600 hover:text-black">
            New
          </button>
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/motion_transfer.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Motion Transfer</span>
          <button className="text-xs px-2 py-1 border-none new_button space_atop rounded-md text-gray-600 hover:text-black">
            New
          </button>
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between w-[320px] p-4 rounded-xl shadow-sm hover:shadow-md transition features_space_right">
      <img
        src="/images/train.png"
        alt="feature"
        className="w-24 h-full object-cover rounded-md image_height"
      />
      <div className="flex flex-col flex-1 px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold space_between">Train</span>
          <button className="text-xs px-2 py-1 border-none new_button space_atop rounded-md text-gray-600 hover:text-black">
            New
          </button>
        </div>
        <p className="text-sm text-gray-600 space_right">
          Short description of feature one.
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-xs px-3 py-1 button-updated border rounded-md text-gray-600 hover:text-black">
          Open
        </button>
      </div>
    </div>
  </div>

</section>


<section className="w-full max-w-6xl mx-auto mt-12 px-6">
  {/* Header Row */}
  <div className="flex items-center justify-between ">
    <h2 className="text-2xl font-bold">Gallery</h2>

    {/* Right buttons container */}
    <div className="flex items-center gap-4">
      <div className="">
      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-black legal_pricing ">
        <Image className=" text-gray-800 dark:text-gray-200 nav-icon-two" /> 
        Legal
      </button>
      </div>
      <div> 

      
      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-black legal_pricing">
        <CreditCard className=" text-gray-800 dark:text-gray-200 nav-icon-two" /> 
        Pricing 
      </button>
      </div>
    </div>
  </div>
<section className="w-full bg-black text-white py-6 px-6 background">
<section className="w-full bg-black text-white py-6 px-6">
  <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
  {/* Left Item */}
  <div className="flex items-center p-4">
    <img
      src="/images/kk.png"
      alt="feature"
      className="w-20 h-20 object-cover rounded-md image_height"
    />
    <span className="ml-4 font-semibold">Krea AI</span>
  </div>

  {/* Right Item */}
  <div className="flex items-center gap-3">
    <span className="font-semibold gap-3 created_by_style">Curated By</span>
    <img
      src="/images/mobbin.png"
      alt="curator"
      className="w-16 h-16 object-cover rounded-md image_sizing image_alignment"
    />
    
  </div>
</div>

</section>

</section>


</section>



    </main>
  );
}

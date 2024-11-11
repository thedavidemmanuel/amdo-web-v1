'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    (<div className="w-full max-w-7xl mx-auto p-10 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-orange-500 uppercase text-sm font-semibold">Contact us</h2>
          <div className="text-3xl font-bold">
            Any question? <span className="font-normal">write or call us</span>
          </div>
          <p className="text-sm text-gray-500">
            If you want to get involved with us, You can get in touch by sending us a message.
          </p>
        </div>

        <form className="md:w-2/3 space-y-4">
          <Input type="text" placeholder="Your Name*" />
          <div className="grid grid-cols-2 gap-4">
            <Input type="email" placeholder="Email Address*" />
            <Input type="tel" placeholder="Phone Number*" />
          </div>
          <Textarea placeholder="Your Message" className="min-h-[150px]" />
          <Button className="bg-[#55A555] hover:bg-[#458545] text-white w-32 rounded-full">
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-6 rounded-lg shadow-md">
        <div className="font-semibold text-lg whitespace-nowrap">
          Subscribe Newsletter
        </div>
        <div className="flex-grow flex space-x-2 w-full sm:w-auto">
          <Input 
            type="email" 
            placeholder="Your Email"
            className="flex-grow text-base py-2"
          />
          <Button className="bg-[#55A555] hover:bg-[#458545] text-white px-8 py-2 text-base rounded-full whitespace-nowrap">
            Subscribe
          </Button>
        </div>
      </div>
    </div>)
  );
}
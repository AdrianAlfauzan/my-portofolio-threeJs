import { motion } from "framer-motion";
import InteractiveButton from "./InteractiveButton";
import CustomTitle from "./CustomTitle";
import { contactData } from "./data/config";
export default function ContactUs() {
  return (
    <article className="relative font-sans text-white rounded-lg p-16 " id="contact">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
      <header>
        <CustomTitle title="Get In Touch" />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-32">
        <section>
          {contactData.map((data) => {
            <motion.article
              key={data.id} //
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-black z-20 md:w-11/12 w-full text-white rounded-xl">
                <div className="border border-yellow-400 bg-[#ffffff29] rounded-xl p-3 flex items-center">
                  <img src={data.icon} alt={data.title} width={64} height={64} />
                  <div className="ml-10">
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-sm"> {data.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>;
          })}
        </section>
        <motion.circle
          transition={{ duration: 0.5, delay: 0.6 }} //
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <form action="" className="space-y-6">
            <section className=" mx-auto rounded-lg max-w-lg">
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="name" className="block border-b">
                  <input type="text" id="name" required placeholder="Your Name" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                </label>
                <label htmlFor="name" className="block border-b">
                  <input type="text" id="name" required placeholder="Your Email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                </label>
              </div>
            </section>
          </form>
        </motion.circle>
      </section>
    </article>
  );
}

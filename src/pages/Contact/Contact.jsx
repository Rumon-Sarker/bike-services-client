import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url('contactbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const { handleSubmit, reset, register } = useForm();
    const handaleSubmit = (data) => {
        fetch('https://test-nine-flame-81.vercel.app/contact', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(result => {

                let timerInterval;
                Swal.fire({
                    title: "Message Sending...",
                    title2: "Thank You ",
                    html: "I will close in <b></b> milliseconds.",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Thnk You ",
                            showConfirmButton: false,
                            timer: 1000
                        });
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                });
                reset()
            }
            )
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>Bike Services || Contact</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
                <div className="max-w-lg mx-auto mt-8 p-8 bg-gray-200 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit(handaleSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Full Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="User Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                {...register("message", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default Contact;
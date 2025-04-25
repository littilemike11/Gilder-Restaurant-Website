import GilderLocation from "/src/assets/GilderLocation.jpg"
export default function HoursLocation() {
    return (
        <>
            <div className="sectionTitle">Hours of Operation & Location</div>
            <div className="flex gap-6 flex-col ">
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-[450px] p-2 m-2">
                        <p className="block">Street View</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1073191523597!2d-73.97689292344468!3d40.78165473334751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25959db5aff51%3A0xeacaf1130ee08991!2sThe%20Restaurant%20at%20Gilder!5e0!3m2!1sen!2sus!4v1744990563446!5m2!1sen!2sus"
                            className="w-full h-full rounded-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                    <div className="w-full md:w-1/2 h-[450px] p-2 m-2">
                        <p className="block">Interior View</p>
                        <a
                            href="https://www.amnh.org/interactive-map/floor-2/the-restaurant-at-gilder"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="See AMNH Floor Plan"
                        >
                            <img
                                src={GilderLocation}
                                alt="Image of AMNH Floor 2 layout"
                                className="w-full h-full object-cover rounded-lg"
                            />

                        </a>

                    </div>
                </div>

                <div className=" p-2 my-4">
                    <address className="font-bold text-lg" s> 200 Central Park West,<br />New York, NY 10024</address>
                    <p>Phone: 212-496-3351</p>
                    <br />
                    <p>Open daily for lunch, 11:30am - 3:30pm.</p>
                    <p>closed Thanksgiving Day and Christmas Day.</p>
                    <br />
                    <p>Located inside the American Museum of Natural History, Gilder Section Floor 2.</p>
                    <p>Walk-ins also welcome. Admission to the Museum is required to dine.</p>
                    <br />
                    <p>Closest Entrance: Columbus Ave./Gilder Center for Science, Education, and Innovation: Enter the Gilder Center at Columbus Ave. and 79th Street. Accessible by wheelchair.</p>


                </div>

            </div >
        </>
    )
}
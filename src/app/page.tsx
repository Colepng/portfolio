"use client";
import Image from 'next/image'
import styles from './page.module.css'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const animationVariantLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: -500 }
};


const animationVariantRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: 1000 }
};

let seen: boolean = false;
let seen2: boolean= false;
export default function Portfolio() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
            if (inView && !seen) {
                control.start("visible");
                seen = true;
            } else if (!seen) {
                control.start("hidden");
            }
            }, [control, inView]);

    const control2 = useAnimation();
    const [ref2, inView2] = useInView();

    useEffect(() => {
            if (inView2 && !seen2) {
                control2.start("visible");
                seen2 = true;
            } else if (!seen2){
                control2.start("hidden");
            }
            }, [control2, inView2]);

    return (
    <main className={styles.main}>
        <div className={styles.center}>
            <div className={styles.welcome}> 
                <h1>Hi there, I&pos;m Cole</h1>
                <p>
                A passionate developer who loves to make blazingly fast software and everything lower level.
                I mainly program in Rust but I also have experience with Java, Python and JavaScript/TypeScript. 
                You can check out my <a href="https://github.com/Colepng">GitHub</a> here and if you want to read about my random programming adventures check out my <a href="https://blog.colepng.com">blog</a>.
                <br/>
                (I use Arch btw)
                </p>
                <div className={styles.links}>
                </div>
            </div>
        </div>

        <div className={styles.about_me}>
        </div>

        <div className={styles.projects}>
            <div className={styles.keyboard_rs}>
                <motion.div 
                ref={ref}
                variants={animationVariantLeft}
                animate = {control}
                initial = "hidden"
                className={styles.keyboard_rs}>
                <Image
                  src="/keyboard.jpeg"
                  alt="photo of the keyboard"
                  className={styles.keyboard_photo}
                  width={2426/2}
                  height={1296/2}
                  priority
                />
                <div className={styles.keyboard_text}>
                    <h1>keyboard-rs</h1>
                    <p>
                    keyboard-rs is an open-source keyboard firmware written in Rust. 
                    It allows users to not have to worry about cryptic compiler errors and just focus on their keymap.
                    Currently keyboard-rs only works with a keyboard running off of a rp2040 
                    but with plans on moving from <a href="https://crates.io/crates/rp2040-hal">rp2040-hal</a> to 
                    <a href="https://crates.io/crates/embedded-hal">embedded-hal</a>, this would allow for any chip that has an embedded-hal implementation
                    including the rp2040. The only other additional feature that is implemented is rotary encoder support.
                    <br/>
                    <br/>
                    The image on the right is of <a href="https://github.com/Colepng/late-night-engineering">late night engineering</a>,
                    a keyboard I designed for my computer engineering class.
                    </p>
                </div>
                </motion.div>
            </div>
            <div className={styles.streaming_rs}>
                <motion.div 
                ref={ref2}
                variants={animationVariantRight}
                animate = {control2}
                initial = "hidden"
                className={styles.streaming_rs}>
                <div className={styles.streaming_text}>
                    <h1>streaming-rs</h1>
                    <b>WARNING VERY ACTIVE DEVLOPEMNT, INFORMATION MAY BE OUT DATED.</b>
                    <p>
                    streaming-rs is a full streaming service written in Rust. There 2 main parts, the server and the client.
                    Let&pos;s start with the server, the server as of September 14th, 2023 is very simple, the client sends a song Spotify ID, and the server sends the file back.
                    If the server doesn&pos;t have the file locally it downloads the song using <a href="https://github.com/spotDL/spotify-downloader">spotDL</a> and sends the file once it is done. Now the client,
                    there is a library provided by streaming-rs which is used to make clients for the server. There are currently 2 clients, a command line and a TUI, 
                    with a planned GUI. The client library currently has the following features, a library, downloading songs, searching songs, playlist and built-in shuffle.
                    </p>
                </div>
                <Image
                  src="/tui.png"
                  alt="photo of the keyboard"
                  className={styles.tui_photo}
                  width={1680/2}
                  height={1050/2}
                  priority
                />
                </motion.div>
            </div>
        </div>
    </main>
   )
}





// export function Home1() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//       </div>
//
//       <div className={styles.center}>
//         <p>
//         My portfolio made with <a href="https://bun.sh/">bun</a> and <a href="https://nextjs.org/">Next.js</a>
//         <br></br>
//         By Cole Kauder-McMurrich
//         </p>
//       </div>
//
//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             keyboard-rs <span>-&gt;</span>
//           </h2>
//           <p>Keyboard firmware written in rust.</p>
//         </a>
//
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>
//
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>
//
//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

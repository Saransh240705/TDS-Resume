// Simple typewriter effect for the hero section
            const roles = [
                "Web Developer",
                "AI Enthusiast",
                "React.js Learner",
                "Problem Solver"
            ];
            let roleIndex = 0, charIndex = 0, typing = true;
            const typewriter = document.getElementById("typewriter");

            function typeEffect() {
                if (typing) {
                    if (charIndex < roles[roleIndex].length) {
                        typewriter.textContent = roles[roleIndex].substring(0, charIndex + 1);
                        charIndex++;
                        setTimeout(typeEffect, 80);
                    } else {
                        typing = false;
                        setTimeout(typeEffect, 1200);
                    }
                } else {
                    if (charIndex > 0) {
                        typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(typeEffect, 40);
                    } else {
                        typing = true;
                        roleIndex = (roleIndex + 1) % roles.length;
                        // Add a non-breaking space to maintain minimum width
                        typewriter.innerHTML = "&nbsp;";
                        setTimeout(typeEffect, 400);
                    }
                }
            }
            
            // Initialize with a non-breaking space to prevent layout shift
            typewriter.innerHTML = "&nbsp;";
            typeEffect();
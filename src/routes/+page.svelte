<script>
    import BellGong from '$lib/assets/BellGong.png'
    import callStack from '$lib/assets/callStack.png'
    import pihole from '$lib/assets/pi.png'
    import rev from '$lib/assets/Light-revvy.png'
    import ghoul from '$lib/assets/Ghoult-export.gif'
</script>
<main>
    <h1>Rambush</h1>
    <h2>Portfolio</h2>
    <hr>

    <h3>Web Development projects</h3>
    <div class="content-grid">

        <div class="grand-item">
            <a href="/BnG">
                <img src={BellGong} alt="Bell & Gong Vineyard website"/>
                <div class="item-desc">
                    <h4>Bell & Gong Vineyard</h4> 
                    <p>A classy face for award winning wine, my first web development project and published product.</p>
                </div>
            </a>
        </div>

        <div class="grid-item">
            <a href="/">
                <img class="overflow" src={callStack} alt="Bell & Gong Vineyard website"/>
            </a>
            <div class="item-desc">
               <h4>callStack</h4>
               <p>Training program manager</p>
            </div>
        </div>

    </div>
    <br>
    <hr>
    <h3>Networking Projects</h3>
    <div class="content-grid">

        <div class="grand-item">
            <a  href="/pihole">
                <img src={pihole} alt="Bell & Gong Vineyard website"/>
            
                <div class="item-desc">
                    <h4>Pi-hole setup on an Optus network</h4> 
                    <p>Setting up a raspberry-pi ad blocker and DNS while battling my Optus modem.</p>
                </div>
            </a>
        </div>
    </div>
    <hr>
    <h3>Game Development projects</h3>
    <div class="content-grid">

        <div class="grand-item">
            <a  href="/noirat">
                <img src={rev} alt="Blacked out room with harsh white light"/>
            
                <div class="item-desc">
                    <h4>???</h4> 
                    <p>Who knows?</p>
                </div>
            </a>
        </div>
        <div class="grid-item">
            <a  href="/aseprite">
                <img class="overflow" src={ghoul} alt="Purple Ghoul"/>
            
                <div class="item-desc">
                    <h4>Aseprite</h4> 
                    <p>Pixel art i made while learning Aseprite</p>
                </div>
            </a>
        </div>
    </div>
    <footer>
        <p>© 2026 Rambush</p>
        <a href="/contact" class = "btn contact">Contact me</a>
    </footer>
</main>
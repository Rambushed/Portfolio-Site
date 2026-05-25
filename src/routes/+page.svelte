<script>
    import BellGong from '$lib/assets/BellGong.png'
    import callStack from '$lib/assets/callStack.png'
</script>
<main>
    <h1>Rambush</h1>
    <h2>Portfolio</h2>
    <hr>

    <h3>Web Development projects</h3>
    <div class="content-grid">

        <div class="grand-item">
            <a  href="/BnG">
                <img src={BellGong} alt="Bell & Gong Vineyard website"/>
            
                <div class="item-desc">
                    <h4>Bell & Gong Vineyard</h4> 
                    <p>A classy face for award winning wine, my first web development project and published product.</p>
                </div>
            </a>
        </div>

        <div class="grid-item">
            <a href="/">
                <img src={callStack} alt="Bell & Gong Vineyard website"/>
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
                <img src={BellGong} alt="Bell & Gong Vineyard website"/>
            
                <div class="item-desc">
                    <h4>Pi-hole setup on an Optus network</h4> 
                    <p>Setting up a raspberry-pi ad blocker and DNS while battling my Optus modem.</p>
                </div>
            </a>
        </div>
    </div>
    <h3>Game Development projects</h3>
</main>
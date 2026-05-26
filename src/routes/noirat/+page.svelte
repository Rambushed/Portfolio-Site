<script>
    import rev from '$lib/assets/Light-revvy.png'
    import interior from '$lib/assets/interior.png'
    import light from '$lib/assets/light-hides.png'
    import barrelL from '$lib/assets/Screenshot 2026-02-07 182518.png'
    import barrelD from '$lib/assets/Screenshot 2026-02-07 182536.png'
    import splat from '$lib/assets/splat.png'
    import bang from '$lib/assets/muzzle_flash.mp4'
    import walkthrough from '$lib/assets/walkthrough.mp4'
    
</script>
<main>
<a href="/" class = "btn back">Back</a>
    <h1>Rambush</h1>
    <h2>Portfolio</h2>
    <hr>

    <h3>???</h3>
    <img class="hero" src={rev} alt ="a harsh light reflecting from a black room"/>

    <h4>A jumbled mess of shader experimentation</h4>
    <p>As of writing this entry it has been a long time since i have touched this project, in summary i was experimenting with shaders to try and achieve an effect similar to the game <a class="link" href="https://steamcommunity.com/app/514830" target="_blank">STIFLED</a> but with some differences in how light is perceived by the player.</p>

    <p>Everything here i either made myself in Blender or Godot</p>

    <h5>Mechanics</h5>
    <p>The idea is that the character has some form of extreme photosensitivity and struggles to see in lit areas, inverting the logic of most gaming light systems.</p>

    <video class="inlay" autoplay muted loop playsinline>
        <source src={walkthrough} type="video/mp4">
    </video>

    <p>This effect is created by using a variation of normal-based edge detection based on this Godot community shader <a class="link" href="https://godotshaders.com/shader/normal-based-edge-detection-with-sobel-operator-screenspace/" target="_blank">Here</a> and a unique lighting shader for the blinding granular effect on the walls.</p>

    <p>Before and after shader application</p>
    <div class="content-grid">
        <div class="grid-item">
            <img src={barrelL} alt="Black room with only white details"/>
        </div>

        <div class="grid-item">
            <img src={barrelD} alt="Black room with only white details"/>
        </div>   
    </div>

    <p>The player is armed with a gun but even the muzzle flash from this may obfuscate vision and create difficulties for the player.</p>
    <p>The video below contains bright flashing lights.</p>
    <video class="inlay" muted controls>
        <source src={bang} type="video/mp4">
    </video>

    <h5>Screenshot Gallery</h5>

    <div class="content-grid">
        <div class="grand-item">
            <img src={interior} alt="Black room with only white details"/>
        </div>

        <div class="grid-item">
            <img src={light} alt="A black table's contents is obfuscated by a blinding light"/>
        </div>

        <div class="grid-item">
            <img src={splat} alt="Black room with only white details"/>
        </div>   
    </div>

    <h5>What now?</h5>
    <p>I might revisit this in the future, the next thing i planned to do was create emmisive shapes to simulate projected light as enabling volumetric fog creates visual issues for this project, but without it there is no light projection.</p>

    <p>I may also opt for object based shading instead of viewport based shading to create a more consistent visual effect with less artifacting.</p>
    <a href="/" target="_blank" class = "btn">Back to portfolio</a>
</main>
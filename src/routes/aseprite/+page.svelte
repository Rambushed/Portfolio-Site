<script>
    import night from '$lib/assets/night_bg.png'
    import des from '$lib/assets/oasis_bg.png'
    import dirt from '$lib/assets/dirt-bg.png'
    import ghoul from '$lib/assets/Ghoult-export.gif'
    import tess1 from '$lib/assets/tessaliteStructure.png'
    import tess2 from '$lib/assets/TESSALITEfactory.png'
    import bug from '$lib/assets/locusship.png'
    import tables from '$lib/assets/dining table.png'
    import cart from '$lib/assets/bar cart.png'
    import lav from '$lib/assets/lavender.png'
</script>
<main>
<a href="/" class = "btn back">Back</a>
    <h1>Rambush</h1>
    <h2>Portfolio</h2>
    <hr>

    <h3>Pixel Art</h3>
    <img class="hero contain" src={ghoul} alt ="a ghoul"/>
    <p>Whilst learning the Godot engine i opted to try and make all my own animated pixel sprites and environments. as of writing this i have amassed over 200 hours in Aseprite. this is my first experience with pixel art, I am definitely not an artistic person but creating these was a fun process and i plan to keep learning.</p>

    <h5>Environments</h5>
    <p>Some of the paralax backgrounds i made for use in Godot.</p>
    <div class="content-grid">
        <div class="grand-item">
            <img class="overflow" src={des} alt="sunset desert"/>
        </div>

        <div class="grid-item">
            <img src={night} alt="night sky and rolling hills"/>
        </div>

        <div class="grid-item">
            <img src={dirt} alt="interior cave wall, dirt and stones"/>
        </div>   
    </div>

    <h5>Characters</h5>
    <div class="content-grid">
        <div class="grid-item">
            <img class="overflow" src={tess1} alt="some abstract mess of geometry"/>
        </div>

        <div class="grid-item">
            <img class="overflow" src={tess2} alt="another abstract mess of geometry"/>
        </div>

        <div class="grid-item">
            <img class="overflow"  src={bug} alt="A Giant bug"/>
        </div>   
    </div>

    <h5>Misc</h5>
    <div class="content-grid">
        <div class="grid-item">
            <img class="overflow" src={cart} alt="some abstract mess of geometry"/>
        </div>

        <div class="grid-item">
            <img class="overflow" src={tables} alt="another abstract mess of geometry"/>
        </div>

        <div class="grid-item">
            <img class="overflow"  src={lav} alt="A Giant bug"/>
        </div>   
    </div>

    <a href="/" class = "btn">Back to portfolio</a>
</main>
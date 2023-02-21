<div class="profile">
    <div class="profile_inner">
        <div class="profile_img">
            <img src="https://i.pinimg.com/originals/4f/c9/81/4fc981d2f0d226ce16b40d35bdd25787.jpg" alt="asd">
        </div>
        <div class="profile_text">
            <p>
                Hi, I'm James.<br>Currently a first year undergraduate at <a href="https://en.wikipedia.org/wiki/Rensselaer_Polytechnic_Institute">RPI</a> studying computer science.<br>
            </p>
            <!--<br>software ive worked on<br>fun facts about me and my hobbies: drawings, art, music, reading<br>contacts<br>get more inspo from other about pages<br>-->
        </div>
    </div>
</div>

<style>
.profile {
    padding-top: 5%;
    width: 50%;
    margin: 0 auto;
}
.profile_inner {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15%;
}
.profile_inner img {
    height: 200px;
}
.profile_img {
    padding: 20px;
}
.profile_text {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}
/* 768px */
@media only screen and (max-width:48em) {
   .profile_inner { 
      display:table;
      width:100%;
   }
   .profile_text {
      display:block;
      width:100%;
   }
   .profile_img { display:table-caption; }
}

</style>
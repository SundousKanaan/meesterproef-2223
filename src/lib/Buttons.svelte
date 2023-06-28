<script lang="ts">
    export let variant: 
    "primary" |
    "start-yellow" |	
    "start-blue" |
    "start-grey" |
    "details" |
    "view-yellow" |
    "view-grey" |
    "view-challenge" |
    "edit" |
    "left" |
    "right" |
    "up" |
    "yes" |
    "no" |
    "savexit" |
    "skipcancel";

    export let handleClick = () => {};

    export let size: "small" | "medium" | "large" | "none" = "none";
    export let hasIcon: boolean = false;

</script>

<button class="{variant} size-{size} icon-{hasIcon}" on:click={handleClick}><slot/></button>

<style>
.size-small {
  font-size: 1rem;
  padding: 8px 21px !important;
}

.icon-true {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.size-medium {
  font-size: 1rem;
  padding: 8px 42px;
}

.size-large {
  font-size: 1.2rem !important;
  padding: 1.5rem !important;
}

button{
  background-color: #21bde5;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
}

button:hover{
  background-color: #32a5c3;
}

.start-yellow,
.primary {
  background-color: #F7CE46;
  color: #000000;
}

.start-yellow:hover{
  background-color: #e1b114;
}

.start-blue{
  min-width: 12rem;
  height: 4rem;
}

.start-grey{
  background-color: #B1AFA9;
  color: #000000;
  cursor: pointer;
}

.details{
  background-color: #F7CE46;
  color: #000000;
  min-width: 8rem;
  height: 4rem;
}

.details:hover{
  background-color: #e1b114;
}

.view-yellow{
  background-color: #F7CE46;
  color: #000000;
  min-width: 10rem;
  height: 4rem;
}

.view-yellow:hover{
  background-color: #e1b114;
}

.view-grey{
  background-color: #B1AFA9;
  color: #000000;
  min-width: 10rem;
  height: 4rem;
}

.view-challenge {
    background-color: #F7CE46;
    color: #000000;
    width: 22rem;
    height: 4rem;
    position: relative;
    padding-right: 2rem;
  }

  .view-challenge::after {
    content: "\f06e";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }

.view-challenge:hover{
  background-color: #e1b114;
}

.edit{
  width: 22rem;
  height: 4rem;
  position: relative;
  padding-right: 2rem;
}

.edit::after {
    content: "\f044";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }

.left{
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
}

.left:hover{
  background-color: #D8D7D4;
}

.left::after {
    content: "\f060";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 40%;
    top: 50%;
    transform: translateY(-50%);
    
  }

.right{
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
}

.right::after {
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 40%;
    top: 50%;
    transform: translateY(-50%);
  }

.right:hover{
  background-color: #D8D7D4;
}

.up{
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  position: fixed;
  top: 80%;
  right: 5%;
  z-index: 100;
}

.up::after {
    content: "\f062";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 40%;
    top: 50%;
    transform: translateY(-50%);
  }

.up:hover{
  background-color: #D8D7D4;
}

.yes{
  background-color: #38D248;
  width: 10rem;
  height: 4rem;
  position: relative;
}

.yes:hover{
  background-color: #269560;
}

.yes::after {
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 40%;
    top: 50%;
    transform: translateY(-50%);
  }

.no{
  background-color: #FF3939;
  width: 10rem;
  height: 4rem;
  position: relative;
}

.no:hover{
  background-color: #AD1F1F;
}

.no::after {
    content: "\f00d";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 45%;
    top: 50%;
    transform: translateY(-50%);
  }

.savexit{
  border: 5px solid #21bde5;
  background-color: #FFFFFF;
  color: #000000;
}

.skipcancel{
  border: none;
  color: #73738C;
  background-color: #FFFFFF;
}

</style>

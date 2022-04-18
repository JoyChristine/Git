import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private elem:ElementRef) {}
  underline = 'white'
  @HostListener("mouseover") 
  onMouseOver(){
    this.textDeco("underline ")
  }

  @HostListener("mouseout") 
  onMouseOut(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
 
 
}

// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-product-bags',
// //   imports: [],
// //   templateUrl: './product-bags.component.html',
// //   styleUrl: './product-bags.component.css'
// // })
// // export class ProductBagsComponent {

// // }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-product-bags',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './product-bags.component.html',
//   styleUrls: ['./product-bags.component.css']
// })
// export class ProductBagsComponent {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-bags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  // template: `
  //   <h2>Product Bags</h2>
  //   <nav>
  //     <a routerLink="/product/home">Home</a> | 
  //     <a routerLink="/product/bags">Bags</a>
  //   </nav>
  // `,
  // styles: [`
  //   h2 { color: darkblue; }
  // `]
  templateUrl: './product-bags.component.html',
  styleUrl: './product-bags.component.css'
})
export class ProductBagsComponent {}

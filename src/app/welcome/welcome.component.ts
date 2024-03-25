import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  template: `
    <section class="container">
      <h1>база</h1>
      <h2>
        Информационное собрание сведений о войне <br />
        Российской Федерации против Украины
      </h2>
      <div>
        <p class="main-text">
          Информация для составления Базы взята из официальных документов, слов
          первых лиц государств, отчётов международных организаций, видео- и
          аудиоматериалов, СМИ, а также на основании уже произошедших событий.
          Документ составлен на основании фактов без мнения (отдельно
          помечается) и собственной интерпретации автора. Информация регулярно
          обновляется и дополняется.
        </p>
        <!-- <p class="links">
          <a href="https://t.me/Base_War_UA_RU" target="_blank"
            >https://t.me/Base_War_UA_RU</a
          >
        </p> -->
      </div>
    </section>
  `,
  styles: `

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5rem;
  }

  h1, h2 {
    text-align: center;
  }

  p {
    text-align: justify;
    max-width: 1000px;
    width: 60%;
    margin: 0 auto;
  }
  `,
})
export class WelcomeComponent {}

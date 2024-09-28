import { useState } from "react";
import classNames from "classnames";

import styles from "./App.module.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classNames(styles.app)}>
      <div className={styles.header} onClick={() => setMenuOpen(true)}></div>
      <div className={styles.content}>
        <article className={styles.article}>
          <button>hello</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius euismod nulla.
            Suspendisse eget ex at nulla malesuada vulputate vitae sed lacus. Duis non enim tortor.
            Aenean tempus, magna sit amet tristique placerat, tortor libero consectetur erat, ac
            porttitor purus turpis at elit. Nunc ac dictum leo. Nam sed nulla magna. Morbi nec quam
            quis mi scelerisque tempor. Donec et venenatis nisl, sed vehicula metus. Ut vel erat
            massa.
          </p>
          <p>
            Duis luctus sollicitudin mi, ut varius leo accumsan eget. Suspendisse potenti. Donec
            posuere, ex eget dictum mollis, purus diam congue sem, vitae condimentum leo dui eu
            lacus. Sed tincidunt finibus orci, id tristique odio viverra at. Proin accumsan congue
            pharetra. Mauris eu auctor lorem. Aenean mollis mi et est aliquam, vel mollis lacus
            rhoncus.
          </p>
          <p>
            Nam egestas ligula nunc, nec vulputate urna sodales ac. Proin semper, justo vel
            porttitor scelerisque, lectus velit vestibulum tortor, sed pulvinar arcu urna nec nibh.
            Mauris at ex at purus fermentum scelerisque. Fusce lectus nisl, blandit nec velit et,
            volutpat aliquet arcu. Proin sit amet porta augue, ut vulputate ipsum. In hac habitasse
            platea dictumst. Donec at quam ante. Suspendisse facilisis erat sit amet sagittis
            ullamcorper. Integer tempor metus vel egestas elementum. Nullam lectus turpis, pulvinar
            quis iaculis sed, tristique in dolor. Duis enim leo, dignissim sed quam id, gravida
            pellentesque nibh. Fusce vitae tincidunt velit.
          </p>
          <p>
            Mauris tempor erat sit amet massa ullamcorper consequat. Vivamus leo elit, tincidunt
            efficitur cursus nec, porta at dui. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Pellentesque lobortis massa nec orci viverra
            elementum. Nam mollis odio nec mauris accumsan, eu ultricies odio aliquet. Duis cursus
            tellus nulla, eget vehicula ex euismod at. Etiam viverra, neque id facilisis convallis,
            nunc mauris finibus erat, sodales porta magna ipsum ut enim. Maecenas ut elit eu dui
            iaculis rhoncus ut euismod ipsum. Nam ac augue eros. Nulla pretium tellus id imperdiet
            ullamcorper. Fusce tempus ligula porttitor orci congue, et venenatis massa aliquam. Nunc
            et vestibulum justo, in euismod tortor. Fusce venenatis blandit semper. Integer
            tristique orci neque, nec condimentum urna rhoncus in. Fusce a neque et nibh scelerisque
            vehicula.
          </p>
          <p>
            In magna risus, laoreet eu commodo non, pharetra at lacus. Nunc tempor leo ut turpis
            tincidunt vestibulum. Nullam at purus ullamcorper, auctor magna eu, rhoncus eros. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Phasellus efficitur ornare leo, nec mollis dolor molestie in. Integer id ante sed sapien
            placerat ornare. Nulla suscipit vel diam eget rhoncus. Suspendisse mauris ligula,
            aliquet ut dictum vel, consectetur non eros. Ut sapien lacus, vestibulum et maximus eu,
            rutrum lacinia neque.{" "}
          </p>
        </article>
      </div>
      <div className={classNames(styles.menu, !menuOpen && styles.hidden)}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
        <div className={styles.menuBack} onClick={() => setMenuOpen(false)}></div>
      </div>
    </div>
  );
}

export default App;

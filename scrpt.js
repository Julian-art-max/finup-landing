console.log(
  'Fin-Up: landing cargada correctamente.'
)


document.addEventListener(
  'DOMContentLoaded',
  () => {

    const menuButton =
      document.querySelector(
        '.menu-toggle'
      )

    const nav =
      document.querySelector(
        '.site-nav'
      )

    const navLinks =
      document.querySelectorAll(
        '.site-nav a[href^="#"]'
      )

    const form =
      document.getElementById(
        'registroForm'
      )


    // =========================================
    // MENÚ RESPONSIVE
    // =========================================

    menuButton?.addEventListener(
      'click',
      () => {

        const isOpen =
          nav.classList.toggle(
            'open'
          )

        menuButton.setAttribute(
          'aria-expanded',
          String(isOpen)
        )

        menuButton.textContent =
          isOpen
            ? '×'
            : '☰'
      }
    )


    // =========================================
    // CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
    // =========================================

    navLinks.forEach(
      (link) => {

        link.addEventListener(
          'click',
          () => {

            nav.classList.remove(
              'open'
            )

            menuButton?.setAttribute(
              'aria-expanded',
              'false'
            )

            if (menuButton) {
              menuButton.textContent =
                '☰'
            }

          }
        )

      }
    )


    // =========================================
    // FORMULARIO DE CONTACTO
    // =========================================

    form?.addEventListener(
      'submit',
      (event) => {

        event.preventDefault()


        const nombre =
          document
            .getElementById('nombre')
            .value
            .trim()


        const interes =
          document.getElementById(
            'interes'
          )


        const modulo =
          interes.options[
            interes.selectedIndex
          ].text


        alert(
          `¡Gracias, ${nombre}!\n` +
          `Registramos tu interés en: ${modulo}.`
        )


        form.reset()

      }
    )

  }
)
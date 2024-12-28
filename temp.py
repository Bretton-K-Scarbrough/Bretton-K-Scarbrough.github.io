import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 100)

u = x**3

plt.plot(x, u)
plt.savefig("./static/images/posts/test/parabola.png", dpi=600, transparent=True)
plt.show()

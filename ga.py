import random
from typing import List, Dict

ACTIONS_POOL = [
    "close_port(22)",
    "close_port(3389)",
    "enforce_MFA()",
    "encrypt_bucket()",
    "rotate_keys()",
    "privatize_DB()",
]


class GAEngine:
    def __init__(self, population_size: int = 20, generations: int = 15, mutation_rate: float = 0.1):
        self.population_size = population_size
        self.generations = generations
        self.mutation_rate = mutation_rate

    def fitness(self, chromosome: List[str], context: Dict) -> float:
        risk_reduction = 0.0
        cost = 0.0
        perf_impact = 0.0
        break_risk = 0.0

        for action in chromosome:
            risk_reduction += context.get("risk_gain", {}).get(action, 0.0)
            cost += context.get("cost", {}).get(action, 0.0)
            perf_impact += context.get("perf", {}).get(action, 0.0)
            break_risk += context.get("break", {}).get(action, 0.0)

        return risk_reduction - cost - perf_impact - break_risk

    def init_population(self) -> List[List[str]]:
        pop = []
        for _ in range(self.population_size):
            genes = random.sample(ACTIONS_POOL, k=random.randint(1, len(ACTIONS_POOL)))
            pop.append(genes)
        return pop

    def crossover(self, p1: List[str], p2: List[str]) -> List[str]:
        cut = len(p1) // 2
        child = list(dict.fromkeys(p1[:cut] + p2[cut:]))
        return child

    def mutate(self, chrom: List[str]) -> List[str]:
        if random.random() < self.mutation_rate:
            if random.random() < 0.5 and chrom:
                chrom.pop(random.randrange(len(chrom)))
            else:
                gene = random.choice(ACTIONS_POOL)
                if gene not in chrom:
                    chrom.append(gene)
        return chrom

    def optimize(self, context: Dict) -> List[str]:
        pop = self.init_population()

        for _ in range(self.generations):
            scored = [(self.fitness(c, context), c) for c in pop]
            scored.sort(key=lambda x: x[0], reverse=True)
            survivors = [c for _, c in scored[: self.population_size // 2]]

            children: List[List[str]] = []
            while len(survivors) + len(children) < self.population_size:
                p1, p2 = random.sample(survivors, 2)
                child = self.crossover(p1, p2)
                child = self.mutate(child)
                children.append(child)

            pop = survivors + children

        best = max(pop, key=lambda c: self.fitness(c, context))
        return best

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import xgboost as xgb
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam

# Função para gerar dados simulados de testes de software
def generate_simulated_software_test_data(samples=1000):
    np.random.seed(42)
    
    # Gerar variáveis simuladas para representar métricas de código
    code_complexity = np.random.randint(1, 100, size=samples)
    number_of_tests = np.random.randint(1, 200, size=samples)
    coverage = np.random.uniform(0.1, 1.0, size=samples)
    number_of_defects = np.random.randint(0, 10, size=samples)
    
    # Variável alvo: 1 se o teste falhou, 0 se o teste foi bem-sucedido
    test_failure = (number_of_defects > 3) | (code_complexity > 80) | (coverage < 0.5)
    
    data = pd.DataFrame({
        'code_complexity': code_complexity,
        'number_of_tests': number_of_tests,
        'coverage': coverage,
        'number_of_defects': number_of_defects,
        'test_failure': test_failure.astype(int)
    })
    
    return data

# Gerar os dados simulados
data = generate_simulated_software_test_data()

# Dividir os dados em características (X) e rótulos (y)
X = data.drop('test_failure', axis=1)
y = data['test_failure']

# Dividir os dados em conjuntos de treinamento e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Treinando o modelo XGBoost
xgb_model = xgb.XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    objective='binary:logistic',
    use_label_encoder=False
)
xgb_model.fit(X_train, y_train)

# Fazer previsões no conjunto de teste com o XGBoost
xgb_y_pred = xgb_model.predict(X_test)

# Avaliar o modelo XGBoost
xgb_accuracy = accuracy_score(y_test, xgb_y_pred)
xgb_classification_rep = classification_report(y_test, xgb_y_pred)
xgb_conf_matrix = confusion_matrix(y_test, xgb_y_pred)

print(f'XGBoost Accuracy: {xgb_accuracy:.2f}')
print('XGBoost Classification Report:')
print(xgb_classification_rep)
print('XGBoost Confusion Matrix:')
print(xgb_conf_matrix)

# Criar o modelo Keras
keras_model = Sequential()
keras_model.add(Dense(32, input_dim=X_train.shape[1], activation='relu'))
keras_model.add(Dense(16, activation='relu'))
keras_model.add(Dense(1, activation='sigmoid'))

# Compilar o modelo Keras
keras_model.compile(optimizer=Adam(learning_rate=0.001), loss='binary_crossentropy', metrics=['accuracy'])

# Treinar o modelo Keras
keras_model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Fazer previsões com o modelo Keras
keras_y_pred = (keras_model.predict(X_test) > 0.5).astype(int)

# Avaliar o modelo Keras
keras_accuracy = accuracy_score(y_test, keras_y_pred)
keras_classification_rep = classification_report(y_test, keras_y_pred)
keras_conf_matrix = confusion_matrix(y_test, keras_y_pred)

print(f'Keras Accuracy: {keras_accuracy:.2f}')
print('Keras Classification Report:')
print(keras_classification_rep)
print('Keras Confusion Matrix:')
print(keras_conf_matrix)

# Salvar o modelo Keras para o TensorFlow.js
keras_model.save('software_test_model.h5')
